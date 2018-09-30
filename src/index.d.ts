import { ParsedUrlQuery } from 'querystring'

export interface RestaurantsSearchQuery extends ParsedUrlQuery {
  latitude?: string;
  longitude?: string;
  range?: string;
  page?: string;
  per_page?: string;
  id?: string;
}

export interface StocksSearchQuery extends ParsedUrlQuery {
  page?: string;
  per_page?: string;
}

export interface Stock {
  id: string;
  restaurant_id: string;
  created_at: string;
  updated_at: string;
}

export interface Restaurant {
  id: string;
  name: string;
  name_kana: string;
  latitude: string;
  longitude: string;
  url: string;
  url_mobile?: string;
  images: string[];
  coupon_url: { desktop?: string, mobile?: string };
  tel?: string;
  opening_times?: string;
  catchphrase?: string;
  description?: string;
  access?: string;
  holiday?: string;
  credit_card?: string;
  non_smoking?: string;
  lunch?: string;
  children?: string;
}

export interface Auth {
  name: string;
  picture: string;
  auth_time: number;
  email: string;
  email_verified: boolean;
  uid: string;
}
