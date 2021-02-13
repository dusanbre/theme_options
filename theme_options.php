<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

add_action( 'admin_menu', 'anps_theme_options_add_page_react' );

/* If user is admin, he will see theme options */
if ( ! function_exists( 'anps_theme_options_add_page_react' ) ) {
	function anps_theme_options_add_page_react() {
		if ( current_user_can( 'manage_options' ) ) {
			add_theme_page( esc_html__( 'Theme Options React', 'procoin' ), esc_html__( 'Theme Options React', 'procoin' ), 'read', 'theme_options_react', 'anps_theme_options_do_page_react' );
		}
	}
}

/* Load admin_view.php page */
if ( ! function_exists( 'anps_theme_options_do_page_react' ) ) {
	function anps_theme_options_do_page_react() {
		include_once get_template_directory() . '/anps-framework/theme_options/view/admin_view.php';
	}
}

function anps_theme_options_scripts() {

	wp_enqueue_script( 'anps_theme_options_react', get_template_directory_uri() . '/anps-framework/theme_options/build/index.js', array( 'wp-element', 'wp-api-fetch', 'wp-url', 'wp-components' ), '1.0.0', true );
	wp_localize_script( 'anps_theme_options_react', 'anps_theme_options', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) );

	wp_enqueue_style( 'anps_theme_options_react_style', get_template_directory_uri() . '/anps-framework/theme_options/build/index.css', array(), '1.0.0' );
}

add_action( 'admin_enqueue_scripts', 'anps_theme_options_scripts' );
