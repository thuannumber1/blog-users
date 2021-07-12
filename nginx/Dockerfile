FROM nginx

# Remove the default nginx.conf
#xoa nginx.conf ==> thay the cua rieng
RUN rm /etc/nginx/conf.d/default.conf

# Replace with our own nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
#COPY nginx.conf /etc/nginx/conf.d/