import React from 'react';
import { useSelector } from 'react-redux';
import Meals from '../../components/meals/Meal';
import { Summery } from '../../components/summery/Summery';

export const MealsPage = () => {
  const { meals, isLoading, error } = useSelector((state) => state.meals);

  return (
    <div>
      <Summery />
      <Meals meals={meals} isLoading={isLoading} error={error} />
    </div>
  );
};
