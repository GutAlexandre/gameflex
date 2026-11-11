package docker

import (
	"testing"

	"github.com/docker/docker/api/types/mount"
)

func TestSessionGPUDeviceRequests(t *testing.T) {
	if got := sessionGPUDeviceRequests(""); got != nil {
		t.Fatalf("GPU NVIDIA vide = %#v, attendu nil", got)
	}

	all := sessionGPUDeviceRequests("all")
	if len(all) != 1 || all[0].Driver != "nvidia" || all[0].Count != -1 || len(all[0].DeviceIDs) != 0 {
		t.Fatalf("GPU NVIDIA all = %#v", all)
	}
	if len(all[0].Capabilities) != 1 || len(all[0].Capabilities[0]) != 1 || all[0].Capabilities[0][0] != "gpu" {
		t.Fatalf("capacités NVIDIA = %#v", all[0].Capabilities)
	}

	one := sessionGPUDeviceRequests("GPU-1234")
	if len(one) != 1 || one[0].Count != 0 || len(one[0].DeviceIDs) != 1 || one[0].DeviceIDs[0] != "GPU-1234" {
		t.Fatalf("GPU NVIDIA ciblé = %#v", one)
	}

	env := sessionNVIDIAEnvironment("all")
	if len(env) != 2 || env[0] != "NVIDIA_DRIVER_CAPABILITIES=all" || env[1] != "GAMEFLEX_NVIDIA_GPU=all" {
		t.Fatalf("environnement NVIDIA = %#v", env)
	}
}

func TestSessionWSLGraphics(t *testing.T) {
	if got := sessionWSLGraphicsEnvironment("", true); got != nil {
		t.Fatalf("environnement WSL sans GPU = %#v, attendu nil", got)
	}
	if got := sessionWSLGraphicsEnvironment("all", false); got != nil {
		t.Fatalf("environnement WSL sans dxg = %#v, attendu nil", got)
	}

	env := sessionWSLGraphicsEnvironment("all", true)
	wantEnv := []string{
		"GALLIUM_DRIVER=d3d12",
		"MESA_D3D12_DEFAULT_ADAPTER_NAME=NVIDIA",
		"LD_LIBRARY_PATH=/usr/lib/wsl/lib:/usr/lib/x86_64-linux-gnu",
	}
	if len(env) != len(wantEnv) {
		t.Fatalf("environnement WSL = %#v", env)
	}
	for i := range wantEnv {
		if env[i] != wantEnv[i] {
			t.Fatalf("environnement WSL[%d] = %q, attendu %q", i, env[i], wantEnv[i])
		}
	}

	mounts := sessionWSLGraphicsMounts("all", true)
	if len(mounts) != 1 || mounts[0].Type != mount.TypeBind ||
		mounts[0].Source != "/usr/lib/wsl" || mounts[0].Target != "/usr/lib/wsl" || !mounts[0].ReadOnly {
		t.Fatalf("montage WSL = %#v", mounts)
	}
	if got := sessionWSLGraphicsMounts("all", false); got != nil {
		t.Fatalf("montage WSL sans dxg = %#v, attendu nil", got)
	}
}
