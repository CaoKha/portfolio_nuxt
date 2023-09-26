<template>
  <el-affix>
    <div class="font-sans antialiased" id="app">
      <nav class="flex items-center justify-between flex-wrap bg-indigo-300 p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" -->
          <!--   xmlns="http://www.w3.org/2000/svg"> -->
          <!--   <path -->
          <!--     d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /> -->
          <!-- </svg> -->
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clip-rule="evenodd" />
          </svg>
          <span class="font-semibold text-xl tracking-tight"></span>
        </div>
        <div class="block sm:hidden">
          <button @click="toggle"
            class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div :class="open ? 'block' : 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div class="text-sm sm:flex-grow">
            <a href="#responsive-header"
              class="no-underline block mt-4 sm:inline-block sm:mt-0 text-black hover:text-white mr-4">
              Docs
            </a>
            <a href="#responsive-header"
              class="no-underline block mt-4 sm:inline-block sm:mt-0 text-black hover:text-white mr-4">
              Examples
            </a>
            <a href="#responsive-header"
              class="no-underline block mt-4 sm:inline-block sm:mt-0 text-black hover:text-white">
              Blog
            </a>
          </div>
          <!-- <div> -->
          <!--   <a href="#" -->
          <!--     class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0">Download</a> -->
          <!-- </div> -->
        </div>
      </nav>
    </div>
  </el-affix>
  <el-backtop :right="100" :bottom="100" />
</template>

<script lang="ts" setup>
const open = useState<boolean>('toggle', () => false)
function toggle() {
  open.value = !open.value
} 
</script>
