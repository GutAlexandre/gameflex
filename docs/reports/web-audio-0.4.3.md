# Web phone audio — 0.4.3

Version 0.4.3 is deployed. Product source: `d60f574cbad3cecedee08bad918b69e7ad0e919e`; build-info reports `d60f574`, service-worker cache 52.

## What changed

The launch gesture previously resumed a WebAudio context while direct WebRTC used an independent HTML audio element. A running context could therefore conceal a separate playback authorization problem. The prior full-application audio check forced the fallback transport; it did not validate the direct output on an iPhone.

Direct, separate WebRTC audio now feeds the same context unlocked by Launch. One gain node applies voluntary mute. An always-muted HTML audio sink keeps Chromium pulling remote audio, without a second audible output; removing that sink produced a zero output in regression testing. Combined remote-play media retains its existing path.

Where supported, the playback audio-session category is acquired before constructing the context and shared with the fallback decoder. Final release restores the earlier category without overwriting an external change. An interrupted context exposes the sound action again. Fallback and direct callbacks no longer overwrite each other's gesture prompts.

Relevant browser references: [Chromium remote MediaStream sink issue](https://issues.chromium.org/issues/40094084), [Audio Session specification](https://www.w3.org/TR/audio-session/).

## Verification

- Node PlayStation suite passed, including shared gesture/context ownership, playback-category ordering and restoration, interruption recovery, mute and final cleanup.
- Synthetic public-origin mobile-browser checks passed: direct WebRTC with unmuted HTML audio playback deliberately rejected, plus actual SessionStream/LaunchScreen fallback and primed-player variants. Direct post-gain analyser energy: 8.08496. Both fallback variants passed fullscreen gesture recovery, mute/unmute and final context release, with zero decoder errors.
- Production webpack build passed in 209.3 seconds. All five pinned audio asset/license hashes remain intact.
- Full deployed application, requested public HTTP origin, mobile Chromium viewport 390×844 and real NES runtime: passed using only an original diagnostic cartridge. Direct peer was `connected`, one stream source, zero fallback BufferSource starts. First Launch output energy: 16.3364, no additional sound tap. After reload and the sound action: 27.4563. The reload assertion clears previous measurements before the tap. No page errors or floating phone-controller button; stored preferences unchanged. Owned cartridge and session removed.
- The same deployed production bundle also passed the real-game fallback check, with nonzero output after Launch and reload.
- Public root, advanced settings, Archives route, main bundle and cache 52 verified against the build on both managed origins; 74 console-icon hashes and five audio hashes verified. API, kernel, credential service and gateway containers were preserved. Previous web container retained for rollback. No native-TV deployment.

These measurements prove nonzero decoded output in the tested browser. Physical iPhone speaker playback remains unverified; the user's initial issue cannot be declared resolved until tested there. A passive observation of the earlier personal session contained silence at the source, but that session had ended before the later report and was not restarted or modified.

## Reproduce

Run `node tests/pi-tv/run-playstation-tests.cjs` and build the audio harness with `node tests/pi-tv/build-audio-harness.mjs`. Use `python3 tests/pi-tv/run-public-audio-check.py --live --published-assets --variant webrtc --variant primed-player --variant player` for isolated synthetic streams.

Use `GAMEFLEX_TEST_PRODUCTION=1 GAMEFLEX_TEST_DEPLOYED=1 GAMEFLEX_TEST_TRANSPORT=webrtc GAMEFLEX_TEST_BASE=<managed-origin> python3 tests/pi-tv/check-player-real-game.py` for the deployed direct path. Omit `GAMEFLEX_TEST_TRANSPORT` for fallback. The runner refuses an existing game, uses only its own original cartridge and preserves preferences. Credentials remain in memory/stdin.
