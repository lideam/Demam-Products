export const Login = () => {
  return (
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="relative">
        <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
          Email
        </label>
        <input
          class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
          type=""
          placeholder="mail@gmail.com"
        />
      </div>
      <div class="mt-8 content-center">
        <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
          Password
        </label>
        <input
          class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
          type=""
          placeholder="Enter your password"
        />
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
          />
          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>
        <div class="text-sm">
          <a href="#" class="text-indigo-400 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
