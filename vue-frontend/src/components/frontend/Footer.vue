<template>
    <footer class="bg-gray-900 text-gray-300">

        <div class="max-w-7xl mx-auto px-6 py-16">

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                <!-- Logo -->

                <div>

                    <h2 class="text-3xl font-bold text-white">
                        Funda Blog
                    </h2>

                    <p class="mt-5 text-gray-400 leading-7">
                        Discover inspiring stories, share your knowledge,
                        and connect with readers from around the world.
                    </p>

                </div>

                <!-- Links -->

                <div>

                    <h3 class="text-white font-semibold mb-5">
                        Quick Links
                    </h3>

                    <ul class="space-y-3">

                        <li><router-link to="/" class="hover:text-white">Home</router-link></li>
                        <li><router-link to="/blogs" class="hover:text-white">Blogs</router-link></li>
                        <li><router-link to="/categories" class="hover:text-white">Categories</router-link></li>
                        <li><router-link to="/about" class="hover:text-white">About</router-link></li>

                    </ul>

                </div>

                <!-- Resources -->

                <div>

                    <h3 class="text-white font-semibold mb-5">
                        Resources
                    </h3>

                    <ul class="space-y-3">

                        <li><router-link to="/" class="hover:text-white">Privacy Policy</router-link></li>
                        <li><router-link to="/" class="hover:text-white">Terms</router-link></li>
                        <li><router-link to="/" class="hover:text-white">Help Center</router-link></li>
                        <li><router-link to="/" class="hover:text-white">FAQ</router-link></li>

                    </ul>

                </div>

                <!-- Newsletter -->

                <div>

                    <h3 class="text-white font-semibold mb-5">
                        Newsletter
                    </h3>

                    <p class="text-gray-400 mb-5">
                        Subscribe to receive our latest articles.
                    </p>

                    <div class="flex">

                        <input
                            type="email"
                            placeholder="Email address"
                            class="w-full rounded-l-lg px-4 py-3 text-black outline-none">

                        <button class="bg-indigo-600 px-5 rounded-r-lg hover:bg-indigo-700">
                            Join
                        </button>

                    </div>

                </div>

            </div>

            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

                <p class="text-gray-400">
                    © 2026 BlogSpace. All Rights Reserved.
                </p>

                <div class="flex gap-6 mt-5 md:mt-0">

                    <a href="#" class="hover:text-white">Facebook</a>
                    <a href="#" class="hover:text-white">Twitter</a>
                    <a href="#" class="hover:text-white">LinkedIn</a>
                    <a href="#" class="hover:text-white">GitHub</a>

                </div>

            </div>

        </div>

    </footer>
</template>

