module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    config: {
      icons_styleheets: 'source/stylesheets/fallbacks'
      icons_images: 'source/icons'
    },

    # optimize Images
    imagemin:
      svg:
        files: [
          expand: true,
          cwd: '<%= config.icons_images %>/svg',
          src: ['*.svg'],
          dest: '<%= config.icons_images %>/svg',
          ext: '.svg'
        ]
      png:
        options:
          optimizationLevel: 7
        files: [
          expand: true,
          cwd: '<%= config.icons_images %>/png',
          src: ['**/*.png'],
          dest: '<%= config.icons_images %>/png',
          ext: '.png'
        ]

    # Create SVG Sprite
    svgstore:
      options:
        prefix: 'icon--'
        svg:
          xmlns: 'http://www.w3.org/2000/svg'
          display: 'none'
          width: '0'
          height: '0'
      default:
        files:
          '<%= config.icons_images %>/icon-sprite.svg': ['<%= config.icons_images %>/svg/*.svg']

    # Create SVG Sprite Fallback
    grunticon:
      active:
        files: [
          expand: true
          cwd: "<%= config.icons_images %>/svg"
          dest: "<%= config.icons_styleheets %>"
          src: ["*.svg"]
        ]
        options:
          cssprefix: ".icon--"
          pngpath: "icons/png"
          pngfolder: "../../icons/png"
          urlpngcss: "icons.fallback.css.scss"
          template: "<%= config.icons_styleheets %>/_icons_stylesheet_template.hbs"
          previewTemplate: "<%= config.icons_styleheets %>/_icons_preview_template.hbs"

    # Change background-image for asset pipeline
    replace:
      iconfallback:
        src: '<%= config.icons_styleheets %>/icons.fallback.css.scss'
        dest: '<%= config.icons_styleheets %>/icons.fallback.css.scss'
        replacements: [
          from: ' url('
          to: ' image-url('
        ]

    shell:
      moveIconsStyleguide:
        command: "mv <%= config.icons_styleheets %>/preview.html  source/styleguide/icons.html.haml"


  require("load-grunt-tasks") grunt
  grunt.registerTask "icons", [
    "imagemin:svg"
    "svgstore"
    "grunticon:active"
    "replace:iconfallback"
    "shell:moveIconsStyleguide"
    "imagemin:png"
  ]
  return
