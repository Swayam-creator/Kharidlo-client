import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
	User,
	Mail,
	Lock,
	Loader,
	UserPlus,
	ArrowRight,
} from "lucide-react";
import { UserCheckIcon } from "lucide-react";

const Login = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		console.log("Form Data:", formData);
		setTimeout(() => setLoading(false), 1500); // simulate request
	};

	return (
		<div
			className="relative min-h-screen bg-cover bg-center"
			style={{
				backgroundImage: `url('/images/signup.webp')`,
			}}
		>
			<div className="absolute inset-0 bg-black/70" />
			<div className="relative z-10 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
        
				<motion.div
					className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 2 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>

					<h1 className="mt-6 text-4xl font-headline text-center text-cyan-300">
						Log in to your account
					</h1>
				</motion.div>

				<motion.div
					className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<div className="bg-gradient-to-b from-orange-300 to-orange-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-800">
									Email address
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Mail className="h-5 w-5 text-cyan-400" />
									</div>
									<input
										id="email"
										type="email"
										required
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  text-white focus:ring-cyan-500 focus:border-emerald-500 sm:text-sm"
										placeholder="you@example.com"
									/>
								</div>
							</div>
							<div>
								<label htmlFor="password" className="block text-sm font-medium text-gray-800">
									Password
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Lock className="h-5 w-5 text-cyan-400" />
									</div>
									<input
										id="password"
										type="password"
										required
										value={formData.password}
										onChange={(e) => setFormData({ ...formData, password: e.target.value })}
										className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  text-white focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
										placeholder="••••••••"
									/>
								</div>
							</div>
							<button
								type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium font-headline  text-white bg-cyan-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50"
								disabled={loading}
							>
								{loading ? (
									<>
										<Loader className="mr-2 h-5 w-5 animate-spin" />
										Loading...
									</>
								) : (
									<>
										<UserCheckIcon className="mr-2 h-5 w-5" />
										Log in
									</>
								)}
							</button>
						</form>

						<p className="mt-8 text-center text-sm text-gray-400">
							Don't have a account?{" "}
							<Link to="/signup" className="font-medium text-cyan-400 hover:text-cyan-500">
								Create your account here <ArrowRight className="inline h-4 w-4" />
							</Link>
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Login;
