import { useSelector } from 'react-redux';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRouter() {
  const { currentUser } = useSelector((state) => state.user);

  return <>{currentUser ? <PrivateRoutes /> : <PublicRoutes />}</>;
}
