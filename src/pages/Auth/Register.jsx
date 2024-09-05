export const Register = () => {
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
      <div class="mt-8 content-center">
        <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
          Confirm Password
        </label>
        <input
          class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
          type=""
          placeholder="Confirm your password"
        />
      </div>
      <div>
        <button
          type="submit"
          class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
