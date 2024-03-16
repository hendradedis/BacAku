import {IProductTrading} from '../../../appTypes/sample.type';
import {APIClient} from '../../../utils/api';
import {useQuery} from 'react-query';
import {MARKET_TRADING} from '../../../constants/reactQuery';

interface IOptions {
  enabled: boolean;
}

export const fetchMarketTrading = async (): Promise<Array<IProductTrading>> => {
  try {
    const response: any = await APIClient.get('wallet/supportedCurrencies');
    return response?.payload;
  } catch (err: any) {
    console.error(
      'services/User/Queries/fetchMarketTrading',
      'fetchMarketTrading',
      err.data || err.response?.data || err.response || err,
    );

    throw err;
  }
};

const useFetchSample = (options: IOptions = {enabled: true}) => {
  return useQuery<Array<IProductTrading>, Error>(
    MARKET_TRADING,
    async () => {
      const response = await fetchMarketTrading();
      if (!response) {
        throw new Error('fetchMarketTrading failed');
      }

      return response;
    },
    {...options},
  );
};

export default useFetchSample;
