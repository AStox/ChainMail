#Chain Mail 💌
##What's Chain Mail?
It's a super cool ERC-721, wallet-to-wallet messaging service on Ethereum, but instead of just texts, you're sending dynamically generated SVGs for dirt cheap.

How's it Different?
Cheap Minting: Minting NFTs can be pricey an storing long strings of indeterminant length even more so! But Chain Mail mints the absolute barest-bones NFT for you and leverages Ethereum events to 'store' the rest of the data (like message content, sender, and receiver), and a block indexer reads the data stored in the events and dynamically generates an SVG for the NFT. What's even more clever than using events for storage is setting the block indexer as the img url for the NFT. The result? Minting dynamically generated SVGs with custom content for just pennies.

Burn to Reply: Wanna respond? Just burn the Chain Mail NFT you got. It's even cheaper to respond because we overwrite the stored data on the smart contract instead of initializing new storage.
