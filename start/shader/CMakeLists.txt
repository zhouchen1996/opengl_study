cmake_minimum_required(VERSION 3.16)

set(GLSL_FILE "resources/triangle.vert" "resources/triangle.frag")

source_group("inc" FILES "${PROJECT_INCLUDE}/shader_s.h")
source_group("src" FILES "shader.cpp")
source_group("glsl" FILES ${GLSL_FILE})

foreach(file ${GLSL_FILE})
    get_filename_component(filename ${file} NAME)
    configure_file(${file} ${CMAKE_CURRENT_BINARY_DIR}/${filename} COPYONLY)
endforeach()

set(EXE_NAME    shader)
set(FILE_PATH   "${PROJECT_INCLUDE}/shader_s.h" "shader.cpp" "${GLSL_FILE}")
set(FOLDER_NAME "start")

add_exe_macro()

target_include_directories(shader PRIVATE ${PROJECT_INCLUDE})
