import React, { Fragment, useState } from 'react';

const AddFavourite = () => {
	const [disabled, setDisabled] = useState(false);
	return (
		<Fragment>
			<button
				disabled={disabled}
				onClick={() => setDisabled(true)}
			><span className='mr-2'>Norminate</span></button> <br />
		</Fragment>
	);
};

export default AddFavourite;
