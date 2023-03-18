import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from '../layout/AdminLayout';
import { UserLayout } from '../layout/UserLayout';
import { UserRoles } from '../lib/contants/common';
import { AdminMeals } from '../pages/admin/AdminMeals';
import { AdminOrders } from '../pages/admin/AdminOrders';
import { MealsPage } from '../pages/user/MealsPage';
import { SignInPage } from '../pages/user/SignInPage';
import { SignUpPage } from '../pages/user/SignUpPage';
import { ProtectedRoutes } from './ProtectedRoutes';

export const MainRoutes = () => {
const role = useSelector((state) => state.auth.user.role)

  return (
    <Routes>
      <Route path="/" element={
         <ProtectedRoutes 
          isAllowed = {[UserRoles.USER, UserRoles.GUEST].includes(role)}
          fallBackPath="/admin/meals"
          components={UserLayout}
         />
      }>
        <Route index
         element={ 
         <ProtectedRoutes
          isAllowed={[UserRoles.USER, UserRoles.GUEST].includes(role)}
          fallBackPath = '/admin/meals'
          components={MealsPage} 
         /> 
         } />
        <Route path="signup" 
        element= {
        <ProtectedRoutes
          isAllowed = {[UserRoles.GUEST, UserRoles.USER].includes(role)}
          fallBackPath = {role === UserRoles.ADMIN ? "/admin/meals" : "/"}
          components={SignUpPage}
        />
        }
        />
        <Route path="signin" element={
          <ProtectedRoutes 
             isAllowed = {[UserRoles.GUEST, UserRoles.USER].includes(role)}
             fallBackPath = { role === UserRoles.ADMIN ? '/admin/meals' : '/'}
             components={SignInPage}
          />
        } />
      </Route>
      
      <Route path="/admin" 
       element={
        <ProtectedRoutes 
         isAllowed = {[UserRoles.ADMIN]}
         fallBackPath = '/'
         components={AdminLayout}
         />
      }>
        <Route path="meals" 
        element={
        <ProtectedRoutes 
            isAllowed = {[UserRoles.ADMIN]}
            fallBackPath = '/'
            components={AdminMeals}
        />
        } />
        <Route path="orders"
         element={
          <ProtectedRoutes 
              isAllowed = {[UserRoles.ADMIN]}
              fallBackPath = '/'
              components={AdminOrders}
         />} />
      </Route>
      <Route path="*" element={<h2> page not FOUND!!! </h2>}/>
    </Routes>
  );
};
