package retrogaming

import "testing"

func TestFrameHasVisibleRGB(t *testing.T) {
	tests := []struct {
		name  string
		frame []byte
		want  bool
	}{
		{name: "empty", frame: nil, want: false},
		{name: "opaque black", frame: []byte{0, 0, 0, 255}, want: false},
		{name: "visible blue", frame: []byte{1, 0, 0, 255}, want: true},
		{name: "visible green in second pixel", frame: []byte{0, 0, 0, 255, 0, 2, 0, 255}, want: true},
		{name: "alpha alone is not visible", frame: []byte{0, 0, 0, 1}, want: false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := frameHasVisibleRGB(tt.frame); got != tt.want {
				t.Fatalf("frameHasVisibleRGB() = %v, want %v", got, tt.want)
			}
		})
	}
}
