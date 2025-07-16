import { UserPlus } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-gradient-from-cyan-400 to-cyan-600 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b-1 border-c-transparent hover:border-cyan-100'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex flex-wrap justify-between items-center'>
					<Link to='/' className='text-2xl font-headline text-cyan-400 items-center space-x-2 flex md:text-5xl'>
						Kharidlo
					</Link>

					<nav className='flex flex-wrap items-center gap-4'>
						<Link
							to={"/"}
							className='text-gray-300 hover:text-cyan-400 transition duration-300
					 ease-in-out'
						>
							{ false && Home}
						</Link>
						{false && (
							<Link
								to={"/cart"}
								className='relative group text-gray-300 hover:text-cyan-400 transition duration-300 
							ease-in-out'
							>
								<ShoppingCart className='inline-block mr-1 group-hover:text-emerald-400' size={20} />
								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span
										className='absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 
									text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out'
									>
										{cart.length}
									</span>
								)}
							</Link>
						)}
						{ false &&  (
							<Link
								className='bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium
								 transition duration-300 ease-in-out flex items-center'
								to={"/secret-dashboard"}
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}
								<Link
									to={"/signup"}
									className='bg-orange-600 hover:bg-cyan-700 text-white py-2 px-4 
									rounded-md flex items-center transition duration-100 ease-in-out'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='bg-cyan-700 hover:bg-orange-600 text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
								<Link
									to={"/login"}
									className='bg-orange-600 hover:bg-orange-400 text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<button>Join as artisan</button>
								</Link>
					</nav>
				</div>
			</div>
		</header>
  )
}

export default Navbar
