
<?php
/**
 * Plugin Name: practice bundle
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
define( 'PRACTICE_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'PRACTICE_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'PRACTICE_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'PRACTICEPlugin' ) ){
	class PRACTICEPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
			add_action( 'enqueue_block_editor_assets', [ $this, 'enqueueAssets' ] );
			add_filter( 'block_categories_all', [$this, 'registerCategories'] );
		}

		function onInit(){
			$blocks =['faq',"ticker"];
			foreach ( $blocks as $block ) {
				register_block_type( __DIR__ . "/build/".$block );
			}

		
			

		}
		function enqueueAssets(){
			wp_enqueue_style( 'PRACTICE-style', PRACTICE_DIR_URL . 'build/index.css', [], PRACTICE_VERSION );
			wp_enqueue_script( 'PRACTICE-script', PRACTICE_DIR_URL . 'build/index.js', ['react', 'react-dom', 'wp-blob', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-compose', 'wp-data', 'wp-i18n'], PRACTICE_VERSION, true );
		}
		function registerCategories( $categories ){
			return array_merge( [ [
				'slug'	=> 'practiceBundle',
				'title'	=> __( 'Practice bundle', 'b-plugins' ),
			] ], $categories );
		}
	}
	new PRACTICEPlugin();
}


// akhane ai code ta valo kore korte hbe tahole important kaj ses tachara temon kon kaj nai. ja ase sob choto kaj korle hbei . akhane important kaj 
