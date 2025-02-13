import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">myAssistant</h3>
            <p className="text-sm text-gray-600">Automating admin tasks for real estate professionals.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Demo</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Privacy</Link>
              </li>
              <li>
                <Link href="#">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} myAssistant. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

