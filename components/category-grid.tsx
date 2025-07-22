import Link from "next/link"
import { Smartphone, Laptop, Watch, Headphones } from "lucide-react"

const categories = [
  {
    name: "Smartphones",
    href: "/products/phones",
    icon: Smartphone,
    description: "Latest flagship phones",
    image: "/images/category-smartphones.png",
  },
  {
    name: "Laptops",
    href: "/products/laptops",
    icon: Laptop,
    description: "High-performance laptops",
    image: "/images/category-laptops.png",
  },
  {
    name: "Wearables",
    href: "/products/wearables",
    icon: Watch,
    description: "Smart watches & fitness trackers",
    image: "/images/category-wearables.png",
  },
  {
    name: "Accessories",
    href: "/products/accessories",
    icon: Headphones,
    description: "Essential tech accessories",
    image: "/images/category-accessories.png",
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of premium electronics across all major categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-2xl bg-card border hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <Icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
