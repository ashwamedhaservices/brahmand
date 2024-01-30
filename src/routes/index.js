import { Navigate, useRoutes } from 'react-router-dom';
// layouts
//
import LoginPage from '../pages/LoginPage';
import Page404 from '../pages/Page404';
import { storageGetItem } from '../service/ash_mlm';
import HomePage from '../pages/HomePage';
import Layout from '../layouts';
import UserProfilePage from '../pages/UserProfilePage';
import Onboarding from '../components/onboarding';
import Pan from '../components/onboarding/kyc/pan';
import PanUpload from '../components/onboarding/kyc/pan_upload';
import Address from '../components/onboarding/address/address';
import AddressProofUpload from '../components/onboarding/address/address_proof_upload';
import Bank from '../components/onboarding/bank/bank';
import Nominee from '../components/onboarding/nominee/nominee';
import ProductPage from '../pages/ProductPage';
import ProductReferral from '../pages/ProductReferral';
// ----------------------------------------------------------------------

export default function Router() {
  const token = storageGetItem('partner_token');
  console.log('token', token);
  const routes = useRoutes([
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/',
      element: token ? <Layout /> : <Navigate to="/login" />,
      // element: <Layout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: <HomePage />},
        { path: 'user-profile', element: <UserProfilePage />},
        { path: 'products', element: <ProductPage />},
        { path: 'products/referrals/:category', element: <ProductReferral />},
        { path: 'kyc',
          element: <Onboarding />,
          children: [
            { path: 'pan', element: <Pan /> },
            { path: 'pan-upload', element: <PanUpload /> },
            { path: 'address', element: <Address /> },
            { path: 'address-proof-upload', element: <AddressProofUpload /> },
            { path: 'bank', element: <Bank /> },
            // { path: 'bank-status', element: '' },
            { path: 'nominee', element: <Nominee /> },
          ]
        }
      ],
    },
    {
      path: '*',
      element: <Page404 /> ,
    },
  ]);

  return routes;
}
