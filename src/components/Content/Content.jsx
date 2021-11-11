import React from 'react';
import Search from '../../features/CatWiki/components/Search/Search';
import './style.scss';
import './backgroudcat.png';
Content.propTypes = {};

function Content(props) {
	return (
		<div className='content-control'>
			<div className='content-list'>
				<div className='text-content'>
					<div className='logo-content'>
						<h2 className='logo-title-text'>CatWiki</h2>
						<div className='logo-image'>
							<img className='image' src='./catLogoWhile.png' alt='' />
						</div>
					</div>

					<p className='text-content-dec'>
						Get to know more about your cat breed
					</p>
					<Search />
				</div>
				<div className='backgroud-image' />
			</div>
		</div>
	);
}

export default Content;