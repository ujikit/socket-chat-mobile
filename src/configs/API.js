import axios from 'axios/index'
import { URL_PRODUCTION, URL_DEVELOPMENT } from './';

const test = async (url, options = {
  method: 'GET',
  body: {}
}) => {
  const request = {
    baseURL: 'https://randomuser.me/api/',
    method: options.method,
    timeout: 500000,
    url,
    headers: options.head
  };
  if (request.method === 'POST') request.data = options.body;
  if (request.method === 'PUT') request.data = options.body;
  const res = await axios(request);
  if (res.status === 200) {
    return res.data
  } else {
    throw res
  }
}

const fetch = async (url, options = {
  method: 'GET',
  body: {}
}) => {
  const request = {
    // development
    baseURL: URL_DEVELOPMENT,
    method: options.method,
    timeout: 500000,
    url,
    headers: options.head
  };
  if (request.method === 'POST') request.data = options.body;
  if (request.method === 'PUT') request.data = options.body;
  if (request.method === 'DELETE') request.data = options.body;
  const res = await axios(request);
  if (res.status === 200) {
    return res.data
  } else {
    throw res
  }
}

export default {
  login: (body) => {
    console.log('loginparameter: ', body);
    return fetch('/auth/login', {
      method: 'POST',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    })
  },
  me: (user_token) => {
    console.log('meparameter: ', user_token);
    return fetch('/profile/me', {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  update_profile: (user_token, body) => {
    console.log('update_profile_parameter: ', user_token, body);
    return fetch('/profile/update?base_64=1', {
      method: 'PUT',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  update_profile_branch: (user_token, id_branch, body) => {
    console.log('update_profile_branch_parameter: ', user_token, body);
    return fetch(`/branches/${id_branch}`, {
      method: 'PUT',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  update_password: (user_token, body) => {
    console.log('update_password_parameter: ', user_token, body);
    return fetch('/profile/update-password', {
      method: 'PUT',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },

  // BALANCE
  get_history_balance: (user_token, id_balance) => {
    console.log('get_history_balance_api_parameter', user_token, id_balance);
    return fetch(`/balance-histories?balance_id=${id_balance}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  // ./BALANCE

  // CATALOG
  post_catalog: (user_token, body) => {
    console.log('post_catalog_api_parameter', user_token, body);
    return fetch(`/catalogs?base_64=1`, {
      method: 'POST',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  // ./CATALOG

  // SEARCH
  search_district: (user_token, body) => {
    console.log('search_district_parameter: ', user_token);
    return fetch(`/area/districts?name=${body}&limit=10`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  // ./SEARCH

  // USER
  detail_user: (user_token, id_user) => {
    console.log('detail_user_parameter: ', user_token, id_user);
    return fetch(`/users/${id_user}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  // ./USER

  // VOUCHER
  get_all_admin_voucher: (user_token, page, params) => {
    console.log('get_all_admin_voucher_parameter: ', user_token, page, params);
    return fetch(`/users/me/voucher?page=${page}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  detail_voucher: (user_token, id_voucher) => {
    console.log('detail_voucher_parameter: ', user_token, id_voucher);
    return fetch(`/vouchers/${id_voucher}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  post_voucher: (user_token, body) => {
    console.log('post_voucher_parameter: ', user_token, body);
    return fetch(`/vouchers?base_64=1`, {
      method: 'POST',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  put_voucher: (user_token, id_voucher, body) => {
    console.log('put_voucher_parameter: ', user_token, body);
    return fetch(`/vouchers/${id_voucher}?base_64=1`, {
      method: 'PUT',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  delete_voucher: (user_token, id_voucher) => {
    console.log('delete_voucher_parameter: ', user_token, id_voucher);
    return fetch(`/vouchers/${id_voucher}`, {
      method: 'DELETE',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  restock_voucher: (user_token, id_voucher, body) => {
    console.log('post_restock_voucher_parameter: ', user_token, id_voucher, body);
    return fetch(`/vouchers/${id_voucher}/restock`, {
      method: 'POST',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  reduce_voucher: (user_token, id_voucher, body) => {
    console.log('post_reduce_voucher_parameter: ', user_token, id_voucher, body);
    return fetch(`/vouchers/${id_voucher}/reduce`, {
      method: 'POST',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  get_detail_stock_voucher: (user_token, id_voucher) => {
    console.log('get_detail_stock_voucher_parameter: ', user_token, id_voucher);
    return fetch(`/vouchers/${id_voucher}/stock`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  get_all_item_voucher_api: (user_token, page, params) => {
    console.log('get_all_item_voucher_parameter: ', user_token, page, params);
    let { id_voucher } = params;
    return fetch(`/users/me/voucher/${id_voucher}?status=transfered`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  set_status_voucher: (user_token, id_voucher) => {
    console.log('set_status_voucher_parameter: ', user_token, id_voucher);
    return fetch(`/vouchers/${id_voucher}/set-active`, {
      method: 'PUT',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  // ./VOUCHER

  // MERCHANT
  get_all_merchant: (user_token, page) => {
    console.log('merchant_parameter: ', user_token, page);
    return fetch(`/merchants?page=${page}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  detail_merchant: (user_token, id_merchant) => {
    console.log('detail_merchant_parameter: ', user_token, id_merchant);
    return fetch(`/merchants/${id_merchant}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  post_merchant: (user_token, body) => {
    console.log('post_merchant_parameter: ', user_token, body);
    return fetch(`/merchants`, {
      method: 'POST',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  put_merchant: (user_token, id_merchant, body) => {
    console.log('put_merchant_parameter: ', user_token, id_merchant, body);
    return fetch(`/merchants/${id_merchant}`, {
      method: 'PUT',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  delete_merchant: (user_token, id_merchant) => {
    console.log('delete_merchant_parameter: ', user_token, id_merchant);
    return fetch(`/merchants/${id_merchant}`, {
      method: 'DELETE',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  // ./MERCHANT

  // MASTER
  get_all_user: (user_token, page, params) => {
    console.log('get_all_member_api_parameter: ', user_token, page, params);
    let { role } = params;
    return fetch(`/users?page=${page}&role=${role}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  get_all_merchant: (user_token, page) => {
    console.log('get_all_merchant_api_parameter: ', user_token, page);
    return fetch(`/users?role=merchant&page=${page}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  get_all_voucher_category: (user_token) => {
    console.log('get_all_voucher_category_parameter: ', user_token);
    return fetch('/voucher-categories/all', {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  get_all_merchant_category: (user_token) => {
    console.log('get_all_merchant_category_parameter: ', user_token);
    return fetch('/merchant-categories/all', {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
  },
  // ./MASTER

  // TRANSACTION
  post_transfer_voucher: (user_token, body) => {
    console.log('post_transfer_voucher_parameter: ', user_token, body);
    return fetch(`/transfer-vouchers`, {
      method: 'POST',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  // ./TRANSACTION

  // VOUCHER_EXCHANGE
  get_item_voucher_api: (user_token, page, params) => {
    console.log('get_item_voucher_api_parameter: ', user_token, page, params);
    let { id_voucher } = params;
    return fetch(`/voucher-items?voucher_id=${id_voucher}&page=${page}`, {
      method: 'GET',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      }
    })
  },
  post_exchange_voucher: (user_token, body) => {
    console.log('post_transfer_voucher_parameter: ', user_token, body);
    return fetch(`/voucher-exchanges`, {
      method: 'POST',
      head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+user_token,
      },
      body: body
    })
  },
  // ./VOUCHER_EXCHANGE

}
