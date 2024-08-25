#version 330 core
out vec4 FragColor;

in vec3 ourColor;
in vec2 TexCoord;

// texture sampler
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D texture3;

void main()
{
    // linearly interpolate between both textures (80% container, 20% awesomeface)
	FragColor = mix(mix(texture(texture1, TexCoord), texture(texture2, TexCoord), 0.2), texture(texture3, TexCoord), 0.5) * vec4(ourColor, 1.0);
}