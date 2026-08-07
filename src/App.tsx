import { Route, Routes } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ScrollToTop } from '@/components/ScrollToTop'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import ContactPage from '@/pages/Contact'
import Gallery from '@/pages/Gallery'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import RangeDetail from '@/pages/RangeDetail'
import Segment from '@/pages/Segment'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />

      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/residential" element={<Segment segment="residential" />} />
          <Route path="/commercial" element={<Segment segment="commercial" />} />
          <Route path="/products/:slug" element={<RangeDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
