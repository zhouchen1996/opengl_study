cmake_minimum_required(VERSION 3.16)

set(GLSL_FILES "resources/trans.vert" "resources/trans.frag")
set(IMAGE_FILES "resources/container.jpg" "resources/wall.jpg" "resources/awesomeface.png")

source_group("inc" FILES "${PROJECT_INCLUDE}/shader_s.h")
source_group("src" FILES "transform.cpp")
source_group("glsl" FILES ${GLSL_FILES})

foreach(file ${GLSL_FILES})
    get_filename_component(filename ${file} NAME)
    configure_file(${file} ${CMAKE_CURRENT_BINARY_DIR}/${filename} COPYONLY)
endforeach()

foreach(file ${IMAGE_FILES})
    get_filename_component(filename ${file} NAME)
    configure_file(${file} ${CMAKE_CURRENT_BINARY_DIR}/${filename} COPYONLY)
endforeach()

set(EXE_NAME    transform)
set(FILE_PATH   "${PROJECT_INCLUDE}/shader_s.h" "transform.cpp" "${GLSL_FILES}")
set(FOLDER_NAME "start")

add_exe_macro()

target_include_directories(transform PRIVATE ${PROJECT_INCLUDE})

add_compile_definitions(STB_IMAGE_IMPLEMENTATION)
