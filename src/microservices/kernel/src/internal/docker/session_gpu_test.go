package docker

import (
	"testing"

	"gameflex/sessionstatus"
)

func TestSessionGPUEnvironmentOverridesMesaOnlyForRaspberryPi(t *testing.T) {
	pi := sessionV3DEnvironment(sessionstatus.GPU{Vendor: "Broadcom"})
	if len(pi) != 2 || pi[0] != "MESA_GL_VERSION_OVERRIDE=4.1" || pi[1] != "MESA_GLSL_VERSION_OVERRIDE=410" {
		t.Fatalf("environnement V3D : %v", pi)
	}
	if env := sessionV3DEnvironment(sessionstatus.GPU{Vendor: "AMD"}); len(env) != 0 {
		t.Fatalf("un GPU PCI ne doit pas être forcé : %v", env)
	}
}
