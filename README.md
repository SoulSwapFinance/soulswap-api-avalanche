# SoulSwap Rest API
Rest API configurations for CoinGecko and CoinMarketCap integration.

Here are the API endpoints:

1. **/pairs**: All trading pairs.

2. **/tickers**: Detailed data for all trading pairs.

3. **/orderbook**: Buy and sell orders. Need to set `ticker_id` and `depth` parameters. If `depth` parameter was not set, it will set `depth` to 1000 and return 500 buy orders and 500 ask orders. i.e. `/orderbook?ticker_id=USDC_WFTM&depth=100`.

4. **/historical_trades**: Show successful trades. Need to set `ticker_id` and `depth` parameters like `/orderbook` endpoint. i.e. `/historical_trades?ticker_id=USDC_WFTM&limit=100`

5. **/assets**: Detailed data for all currencies available on our exchange.

API Endpoints:

https://subgraph.soulswap.finance/pairs

https://subgraph.soulswap.finance/tickers

https://subgraph.soulswap.finance/orderbook   ticker_id  and depth  parameter. i.e https://subgraph.soulswap.finance/orderbook?ticker_id=USDC_WFTM&depth=100

https://subgraph.soulswap.finance/historical_trades ticker_id  and limit parameter. i.e https://subgraph.soulswap.finance/historical_trades?ticker_id=USDC_WFTM&limit=100

https://subgraph.soulswap.finance/assets
