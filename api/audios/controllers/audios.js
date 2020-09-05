const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.audios.search(ctx.query);
        } else {
            entities = await strapi.services.audios.find(ctx.query);
        }

        return entities.map(entity => {
            const audios = sanitizeEntity(entity, {
                model: strapi.models.audios,
            });
            delete audios.createdAt,
                delete audios.updatedAt,
                delete audios.created_by,
                delete audios.updated_by,
                delete audios._id,
                delete audios.__v,
                delete audios.Artistes.createdAt,
                delete audios.Artistes.updatedAt,
                delete audios.Artistes.__v,
                delete audios.Artistes._id,
                delete audios.Artistes.id,
                delete audios.Artistes.cover.formats,
                delete audios.Artistes.cover.provider,
                delete audios.Artistes.cover.related,
                delete audios.Artistes.cover.createdAt,
                delete audios.Artistes.cover.updatedAt,
                delete audios.Artistes.cover.created_by,
                delete audios.Artistes.cover.created_by,
                delete audios.Artistes.cover.updated_by,
                delete audios.Artistes.cover.id,
                delete audios.Artistes.cover.alternativeText,
                delete audios.Artistes.cover.caption,
                delete audios.Artistes.cover.hash,
                delete audios.Artistes.cover.ext,
                delete audios.Artistes.cover.mime,
                delete audios.Artistes.cover.size,
                delete audios.Artistes.cover.width,
                delete audios.Artistes.cover.height,
                delete audios.Artistes.cover.name,
                delete audios.Artistes.cover._id,
                delete audios.Artistes.cover.__v;
            audios.Artistes.albums.forEach(album => {
                delete album.createdAt,
                    delete album.updatedAt,
                    delete album.__v,
                    delete album._id,
                    delete album.cover_album.formats,
                    delete album.cover_album.provider,
                    delete album.cover_album.related,
                    delete album.cover_album.createdAt,
                    delete album.cover_album.updatedAt,
                    delete album.cover_album.created_by,
                    delete album.cover_album.created_by,
                    delete album.cover_album.updated_by,
                    delete album.cover_album.id,
                    delete album.cover_album.alternativeText,
                    delete album.cover_album.caption,
                    delete album.cover_album.hash,
                    delete album.cover_album.ext,
                    delete album.cover_album.mime,
                    delete album.cover_album.size,
                    delete album.cover_album.width,
                    delete album.cover_album.height,
                    delete album.cover_album.name,
                    delete album.cover_album._id,
                    delete album.cover_album.__v;

                album.traks.forEach(track => {
                    delete track._id,
                        delete track.alternativeText,
                        delete track.caption,
                        delete track.hash,
                        delete track.ext,
                        delete track.mime,
                        delete track.size,
                        delete track.provider,
                        delete track.width,
                        delete track.height,
                        delete track.related,
                        delete track.createdAt,
                        delete track.updatedAt,
                        delete track.__v,
                        delete track.created_by,
                        delete track.created_by,
                        delete track.updated_by;
                })


            });
            return audios;
        });
    },
};