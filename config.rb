require 'pry'
###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
helpers do
  def streusel_icon(name, classes = '')
    haml_tag :svg, xmlns: 'http://www.w3.org/2000/svg', title: "#{name}", class: "icon icon--#{name} #{classes}" do
      haml_tag :use, 'xlink:href' => "#icon--#{name}"
    end
  end

  def body_class
    ''
  end

  # Make render partial behave like in rails to have common templates
  def render(partial)
    names = partial.split('/')
    names[-1] = "_#{names[-1]}"
    partial = names.join('/')
    super nil, partial, locals: {}
  end


  # Make asset_path partial behave like in rails to have common templates
  def asset_path(*args)
    return super(*args) unless args.length == 1

    type = case args.first.split('.').last
           when 'css'
             :css
           when 'jpg', 'jpeg', 'png', 'svg'
             :images
           when 'coffee', 'js'
             :js
           else
             raise "Unknown file type #{args.first.inspect}"
           end
    super(type, args.first)
  end
end

#set :source, 'app/views'

set :css_dir,    'stylesheets'
#set :js_dir,     '../assets/javascripts'
#set :images_dir, '../assets/images'
#set :layouts_dir, 'layouts'
set :layout, 'application'



# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css
  compass_config do |config|
    # config.output_style = :compressed
    config.sass_options = { :debug_info => false, :line_comments => false }
  end

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

sprockets.append_path 'app/assets'