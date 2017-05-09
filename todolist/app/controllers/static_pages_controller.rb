class StaticPagesController < ApplicationController
  def root
    render text: "<div id=\"content\"></div>" 
  end
end
