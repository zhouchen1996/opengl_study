cmake_minimum_required(VERSION 3.16)

set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 11)

project(MyOpengl LANGUAGES C CXX)

add_library(glad "third_src/glad.c")
target_include_directories(glad PRIVATE "third_include")

add_library(glfw STATIC IMPORTED)
set_target_properties(glfw PROPERTIES
    IMPORTED_LOCATION "${CMAKE_SOURCE_DIR}/third_lib/glfw3.lib"
)

set_property(GLOBAL PROPERTY USE_FOLDERS ON)
set_property(GLOBAL PROPERTY PREDEFINED_TARGETS_FOLDER "CMakeTargets")

macro(add_exe_macro)
    add_executable(${EXE_NAME} ${FILE_PATH})
    set_target_properties(${EXE_NAME} PROPERTIES FOLDER ${FOLDER_NAME})
    target_include_directories(${EXE_NAME} PRIVATE "${CMAKE_SOURCE_DIR}/third_include")
    target_link_libraries(${EXE_NAME} PRIVATE glfw glad)
endmacro()

add_subdirectory(start)