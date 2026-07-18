import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MarketPlacePage from '../pages/MarketPlacePage';
import FeedPage from '../pages/FeedPage';
import CollectionPage from '../pages/CollectionPage';
import MarketItemDetail from '../pages/MarketItemDetail';
import AccountPage from '../pages/AccountPage';
import PostDetailPage from '../pages/PostDetailPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/marketpage' element={<MarketPlacePage />} />
      <Route path='/marketItemDetail/:id' element={<MarketItemDetail />} />
      <Route path='/feedpage' element={<FeedPage />} />
      <Route path='/collectionpage' element={<CollectionPage />} />
      <Route path='/accountpage' element={<AccountPage />} />
      <Route path='/post/:id' element={<PostDetailPage />} />
    </Routes>
  );
};

export default AppRouter;
