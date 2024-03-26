# using buildah, not using docker
buildah bud -t docker.io/kade93/kade-im-webapp:1.0 .
buildah push docker.io/kade93/kade-im-webapp:1.0