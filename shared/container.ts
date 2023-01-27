import "reflect-metadata";
import { container } from "tsyringe";
import { GaleriaService } from "../services/galeriaService";
import { NewsService } from "../services/newsService";
import { VideosService } from "../services/videosService";
import { PodcastService } from "../services/podcastService";

container.register(
  "INewsService",{
    useClass: NewsService
  },
);
container.register(
  "IVideosService",{
    useClass: VideosService
  },
);
container.register(
  "IGaleriaService",{
    useClass: GaleriaService
  },
);

container.register(
  "IPodcastService",{
    useClass: PodcastService
  },
)