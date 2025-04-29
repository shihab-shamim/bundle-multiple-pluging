<?php
/**
 * Plugin Name: Bundle plugin
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'BNDL_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'BNDL_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BNDL_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'BNDLPlugin' ) ){
	class PREFIXPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
			add_action( 'enqueue_block_editor_assets', [ $this, 'enqueueAssets' ] );
			add_filter( 'block_categories_all', [$this, 'registerCategories'] );
		}
		

		function onInit(){
			$blocks =['faqs-plugins','ticker-plugins'];
			foreach ( $blocks as $block ) {
				register_block_type( __DIR__ . "/build/".$block );
			}
		}
		function enqueueAssets(){
			wp_enqueue_style( 'bndl-style', BNDL_DIR_URL . 'build/index.css', [], BNDL_VERSION );
			wp_enqueue_script( 'bndl-script', BNDL_DIR_URL . 'build/index.js', ['react', 'react-dom', 'wp-blob', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-compose', 'wp-data', 'wp-i18n'], BNDL_VERSION, true );
		}
		function registerCategories( $categories ){
			return array_merge( [ [
				'slug'	=> 'bundleBplugins',
				'title'	=> __( 'b Block', 'b-plugins' ),
			] ], $categories );
		} // Register categories
	}
	new PREFIXPlugin();
}