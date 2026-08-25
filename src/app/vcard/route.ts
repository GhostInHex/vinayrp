import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { NextResponse } from "next/server"
import { decodeEmail, decodePhoneNumber } from "@/utils/string"
import sharp from "sharp"
import VCard from "vcard-creator"

import { USER } from "@/features/portfolio/data/user"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function GET() {
  const card = new VCard()

  const email = decodeEmail(USER.emailB64)
  const phoneNumber = decodePhoneNumber(USER.phoneNumberB64)

  card.addName(USER.lastName, USER.firstName).addAddress(USER.address)

  if (phoneNumber) {
    card.addPhoneNumber(phoneNumber)
  }

  if (email) {
    card.addEmail(email)
  }

  card.addURL(USER.website)

  const photo = await getVCardPhoto(USER.avatar)
  if (photo) {
    card.addPhoto(photo.image, photo.mime)
  }

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0]
    card.addCompany(company.company).addJobtitle(company.title)
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
    },
  })
}

async function getVCardPhoto(url: string) {
  try {
    // Local placeholder assets live in `public/`, so serve them from disk
    // instead of fetching over the network (which fails at build time).
    let buffer: Buffer
    let contentType: string

    if (url.startsWith("/")) {
      const filePath = join(process.cwd(), "public", url)
      buffer = await readFile(filePath)
      contentType = getMimeType(filePath)
    } else {
      const res = await fetch(url)

      if (!res.ok) {
        return null
      }

      buffer = Buffer.from(await res.arrayBuffer())
      if (buffer.length === 0) {
        return null
      }

      contentType = res.headers.get("Content-Type") || ""
    }

    if (!contentType.startsWith("image/")) {
      return null
    }

    const jpegBuffer = await convertImageToJpeg(buffer)
    const image = jpegBuffer.toString("base64")

    return {
      image,
      mime: "jpeg",
    }
  } catch {
    return null
  }
}

function getMimeType(filePath: string) {
  if (filePath.endsWith(".png")) return "image/png"
  if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg"))
    return "image/jpeg"
  if (filePath.endsWith(".webp")) return "image/webp"
  if (filePath.endsWith(".gif")) return "image/gif"
  if (filePath.endsWith(".svg")) return "image/svg+xml"
  return ""
}

async function convertImageToJpeg(imageBuffer: Buffer): Promise<Buffer> {
  try {
    const jpegBuffer = await sharp(imageBuffer)
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true,
      })
      .toBuffer()

    return jpegBuffer
  } catch (error) {
    console.error("Error converting image to JPEG:", error)
    throw error
  }
}
