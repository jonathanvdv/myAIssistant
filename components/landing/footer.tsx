import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="https://i.ibb.co/CKh9zbTB/final-logo-logo-1.png"
              alt="myAIssistant Logo"
              width={180}
              height={45}
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-600">
              Automating admin tasks for real estate professionals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#demo">Demo</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} myAIssistant. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 