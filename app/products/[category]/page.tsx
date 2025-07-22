import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { getProductsByCategory } from "@/lib/products"
import { notFound } from "next/navigation"

const categoryNames = {
  phones: "Smartphones",
  laptops: "Laptops",
  wearables: "Wearables",
  accessories: "Accessories",
}

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params

  if (!Object.keys(categoryNames).includes(category)) {
    notFound()
  }

  const products = getProductsByCategory(category)
  const categoryName = categoryNames[category as keyof typeof categoryNames]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{categoryName}</h1>
          <p className="text-muted-foreground">Discover our premium selection of {categoryName.toLowerCase()}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
