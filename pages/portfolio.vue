<template>
  <main class="min-h-screen py-10">
    <div id="portfolio-avatar" class="flex justify-center pb-4">
      <img src="/images/avatar.jpeg" alt="avatar" :width="200" :height="200"
        class="rounded-full ring-1 ring-gray-900/5" />
    </div>
    <div id="portfolio-intro" class="flex justify-center px-20">
      <p class="text-center pb-10 text-gray-500 leading-5">
        Hello, I'm <span class="font-bold">Kha.</span> <br />
        Welcome to my portfolio, <br />
        This is where I exhibit all my side projects!
      </p>
    </div>
    <div class=" flex justify-center px-4 sm:px-20">
      <div
        class="p-5 bg-gradient-to-r from-white to-indigo-200 rounded-lg grid grid-cols-4 gap-x-3 gap-y-10 w-full sm:gap-x-10">
        <div class="text-center font-bold text-lg">
          <p>Projects</p>
        </div>
        <div class="text-center col-span-2 font-bold text-lg">
          <p>Descriptions</p>
        </div>
        <div class="text-center font-bold text-lg">
          <p>Sources</p>
        </div>
        <div class="pl-1 text-gray-500 font-bold">
          <p>Yogurt Simulator</p>
        </div>
        <div class="pr-1 col-span-2">
          <p>A web application that simulates physics of a yogurt using WebAssembly (Rust) and Nuxt</p>
        </div>
        <div class=" pr-1">
          <p>WIP</p>
        </div>
        <div class="pl-1 text-gray-500 font-bold">
          <p>Tenisu Web Application</p>
        </div>
        <div class="pl-1 col-span-2">
          <p>A single page application that can search for a tenis player from a list of tenis players. Created with React
            and Vite. </p>
        </div>
        <div class=" pr-1">
          <a href="https://tenisu-app.vercel.app/" target="_blank" class="underline text-blue-500">Link to the app</a>
        </div>
        <div class="pl-1 text-gray-500 font-bold">
          <p>Sumo Robot</p>
        </div>
        <div class="col-span-2">
          <p>A robot that can push any objects which are close to it out of the ring. Implementation of "State Machine".
            Programmed with C on SimpleLink™ MSP432P401R MCU LaunchPad™. Front part designed with Blender 3.0</p>
          <video controls muted>
            <source src="https://video.wixstatic.com/video/ee9a71_11ab2e62fc6f4737a08cdf7317ce9403/720p/mp4/file.mp4">
          </video>
        </div>
        <div class="pr-1">
          <a href="https://github.com/CaoKha/SumoRobot" target="_blank" class="underline text-blue-500">Source Code</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

