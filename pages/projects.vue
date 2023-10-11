<template>
  <main class="min-h-screen py-10">
    <section >
      <div class="mx-5 lg:w-2/3 lg:m-auto">
      <h1 class="text-center text-4xl font-bold tracking-tight dark:text-slate-200 sm:text-5xl">SUMO ROBOT</h1>

      <h2 class="text-center mt-3 text-lg font-medium tracking-tight dark:text-slate-200 sm:text-xl">University of
        technology of Compiegne, France</h2>

      <p class="text-center font-medium dark:text-slate-200 ">10/2019</p>
      <br />
      <video controls muted>
        <source src="https://video.wixstatic.com/video/ee9a71_11ab2e62fc6f4737a08cdf7317ce9403/720p/mp4/file.mp4">
      </video>
      <p class="sm:text-xl text-center">This is my school project at UTCoupe, a robotics club for student at university of technology of Compiegne. The
        goal is to search for an opponent robot and kick it out of the ring.</p>
        </div>
    </section>
    <section>
      <div class="mx-5 grid lg:grid-cols-2 lg:mx-10 lg:gap-4 pt-10 lg:pt-52">
        <div>
          <h1 class="mt-3 text-lg font-medium tracking-tight dark:text-slate-200 sm:text-2xl">1: WRITING SCRIPT ON ARDUINO</h1>
          <p class="pt-5 sm:text-xl">Fascinating by finite machine methodology learned on TI-RSLK from Texas Instrument,
            I implemented it on my own robot at home but replacing the MSP432 microcontroller by arduino.
            The robot made decisions after each readings from luminosity sensor and infrared sensor.
          </p>
          <br/>
          <button class="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><a href="https://github.com/CaoKha/SumoRobot" target="_blank" ><span>Source Code</span></a></button>
        </div>
        <div class="pt-10 lg:pt-0">
          <video controls muted>
            <source src="https://video.wixstatic.com/video/ee9a71_9abe7b5120714381813439a306a70e83/720p/mp4/file.mp4">
          </video>
        </div>
      </div>

      <div class="mx-5 grid lg:grid-cols-2 lg:mx-10 lg:gap-4 pt-10 lg:pt-52">
        <div>
          <h1 class="mt-3 text-lg font-medium tracking-tight dark:text-slate-200 sm:text-2xl">2: DESIGN FRONT PLATE FOR 3D PRINTING</h1>
          <p class="pt-5 sm:text-xl">Our robot need a front plate in order to attack the opponent. 
            My task is to print the front plate of the robot. The other parts are carried out by my teammate.
            At the beginning, I found that Catia V5 is expensive to buy and my license in school has just ended. 
            I searched on the Internet for a new open source software and I found Blender. 
            Luckily, Blender 2.8 just went out and it is amazing and very easy to use.
          </p>
          <br/>
          <button class="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><a href="https://files.slack.com/files-pri/T2DS3L8CA-FNV8C0XUG/download/alligathor.stl" target="_blank" ><span>STL File</span></a></button>
        </div>
        <div class="pt-10 lg:pt-0">
            <img src="https://static.wixstatic.com/media/ee9a71_7c44bdd21b6447fab44ac622f119a848~mv2.png/v1/fill/w_960,h_740,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ee9a71_7c44bdd21b6447fab44ac622f119a848~mv2.png">
        </div>
      </div>
    </section>


  </main>
</template>

<script setup>
</script>
