import Navigation from '@/layout/Navigation';
import App from '@/layout/Application';
import Footer from '@/layout/Footer';

const app = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <App />
      <Footer />
    </div>
  );
};
export default app;
