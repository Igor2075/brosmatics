import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class ShopPage extends Component {
	state = {
		collections: SHOP_DATA,
	};

	render() {
		const collections = this.state.collections.map((collection) => (
			<CollectionPreview title={collection.title} items={collection.items} />
		));
		return <div>{collections}</div>;
	}
}

export default ShopPage;
