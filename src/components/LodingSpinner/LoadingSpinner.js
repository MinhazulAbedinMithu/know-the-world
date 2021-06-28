import React from "react";

const LoadingSpinner = () => {
	return (
		<div className="text-center py-5">
			<div class="spinner-grow text-danger" role="status">
				<span class="sr-only">Loading...</span>
			</div>
			<div class="spinner-grow text-warning mx-3" role="status">
				<span class="sr-only">Loading...</span>
			</div>
			<div class="spinner-grow text-success" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default LoadingSpinner;
