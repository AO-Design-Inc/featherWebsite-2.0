<script>
  import { onMount } from 'svelte';
  let formValue;
  let bool = false;
  onMount(async () => {
    let formChild = formValue;
    let observer = new MutationObserver((mutationsList) => {
      console.log(mutationsList);
      bool = true;
    });
    observer.observe(formChild, { characterData: false, childList: true, attributes: false });
  });
</script>

<svelte:head>
  <script>
    if (!window.mootrack) {
      !(function (t, n, e, o, a) {
        function d(t) {
          var n = ~~(Date.now() / 3e5),
            o = document.createElement(e);
          (o.async = !0), (o.src = t + '?ts=' + n);
          var a = document.getElementsByTagName(e)[0];
          a.parentNode.insertBefore(o, a);
        }
        (t.MooTrackerObject = a),
          (t[a] =
            t[a] ||
            function () {
              return t[a].q ? void t[a].q.push(arguments) : void (t[a].q = [arguments]);
            }),
          window.attachEvent
            ? window.attachEvent('onload', d.bind(this, o))
            : window.addEventListener('load', d.bind(this, o), !1);
      })(window, document, 'script', '/scripts/moosend-tracking.min.js', 'mootrack');
    }
    mootrack('loadForm', '7b8e8353ac044d15ba41558b6fa9d886');
  </script>
</svelte:head>

<div class="title-container center center-text">
  <div class="spacer first" />
  <div class="hundred-width subheader">You're invited to:</div>
  <div class="hundred-width title">The Future of Compute</div>
  <div class="spacer first two" />
  <div class="hundred-width date-time opacity-low">Tuesday, March 29th<br />2pm EST / 11am PST</div>
  <div class="spacer first two" />
  <div class="cta">Register to receive the link to the Gathertown on the day of the event:</div>
  {#if bool === false}
    <div style="height: 120px; display: grid; place-items:center">Loading...</div>
  {/if}
  <div bind:this={formValue} data-mooform-id="7b8e8353-ac04-4d15-ba41-558b6fa9d886" />
  <div class="spacer second" />
  <div class="spacer second" />
  <div class="spacer second" />
  <div class="spacer second" />
</div>

<style lang="scss">
  @import '../variables';
  .spacer.first {
    width: 100%;
    height: get-vw(90px);
    @media screen and (min-width: 1240px) {
      height: min(get-vw(90px), 90px);
    }
    @media screen and (max-width: $bp) {
      height: max(get-vw(90px), 90px);
    }
  }
  .spacer.second {
    width: 100%;
    height: get-vw(45px);
    @media screen and (min-width: 1240px) {
      height: min(get-vw(45px), 45px);
    }
    @media screen and (max-width: $bp) {
      height: max(get-vw(45px), 45px);
    }
  }
  .spacer.first.two {
    height: get-vw(10px);
    @media screen and (min-width: 1240px) {
      height: min(get-vw(10px), 10px);
    }
    @media screen and (max-width: $bp) {
      height: max(get-vw(10px), 10px);
    }
  }
  .spacer.second {
    width: 100%;
    height: get-vw(45px);
    @media screen and (min-width: 1240px) {
      height: min(get-vw(45px), 45px);
    }
    @media screen and (max-width: $bp) {
      height: max(get-vw(45px), 45px);
    }
  }
  .title-container,
  .hundred-width {
    width: 100%;
    text-align: center;
  }
  .center {
    display: grid;
    place-items: center;
  }
  .title-container,
  .date-time {
    font-size: get-vw(26px);
    font-weight: 250;
    @media screen and (min-width: 1240px) {
      font-size: min(get-vw(26px), 26px);
    }
    @media screen and (max-width: $bp) {
      font-size: max(get-vw(26px), 26px);
    }
  }
  .title {
    font-size: get-vw(72px);
    font-weight: 700;
    @media screen and (min-width: 1240px) {
      font-size: min(get-vw(72px), 72px);
    }
    @media screen and (max-width: $bp) {
      font-size: max(get-vw(72px), 50px);
    }
  }
  .opacity-low {
    opacity: 0.65;
  }

  .cta {
    font-size: 18px;

    @media screen and (max-width: $bp) {
      width: 75%;
    }
  }
</style>
