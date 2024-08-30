cmake_minimum_required(VERSION 3.16)

set(GLSL_FILES "resources/coordinate_system.vert" "resources/coordinate_system.frag")
set(IMAGE_FILES "resources/container.jpg" "resources/wall.jpg" "resources/awesomeface.png")

source_group("inc" FILES "${PROJECT_INCLUDE}/shader_s.h")
source_group("src" FILES "coordinate_system.cpp")
source_group("glsl" FILES ${GLSL_FILES})

foreach(file ${GLSL_FILES})
    get_filename_component(filename ${file} NAME)
    configure_file(${file} ${CMAKE_CURRENT_BINARY_DIR}/${filename} COPYONLY)
endforeach()

foreach(file ${IMAGE_FILES})
    get_filename_component(filename ${file} NAME)
    configure_file(${file} ${CMAKE_CURRENT_BINARY_DIR}/${filename} COPYONLY)
endforeach()

set(EXE_NAME    coordinate_system)
set(FILE_PATH   "${PROJECT_INCLUDE}/shader_s.h" "coordinate_system.cpp" "${GLSL_FILES}")
set(FOLDER_NAME "start")

add_exe_macro()

target_include_directories(coordinate_system PRIVATE ${PROJECT_INCLUDE})

add_compile_definitions(STB_IMAGE_IMPLEMENTATION)
