export interface SingleMeteorData {
  links?: {
    self?: undefined | string;
  };
  id: string;
  neo_reference_id: string;
  name?: undefined | string;
  nasa_jpl_url?: undefined | string;
  absolute_magnitude_h?: undefined | number;
  estimated_diameter?: {
    kilometers?: {
      estimated_diameter_min?: undefined | number;
      estimated_diameter_max?: undefined | number;
    };
    meters?: {
      estimated_diameter_min?: undefined | number;
      estimated_diameter_max?: undefined | number;
    };
    miles?: {
      estimated_diameter_min?: undefined | number;
      estimated_diameter_max?: undefined | number;
    };
    feet?: {
      estimated_diameter_min?: undefined | number;
      estimated_diameter_max?: undefined | number;
    };
  };
  is_potentially_hazardous_asteroid?: undefined | boolean;
  close_approach_data?:
    | [
        {
          close_approach_date?: undefined | string;
          close_approach_date_full?: undefined | string;
          epoch_date_close_approach?: undefined | number;
          relative_velocity?: {
            kilometers_per_second?: undefined | string;
            kilometers_per_hour?: undefined | string;
            miles_per_hour?: undefined | string;
          };
          miss_distance?: {
            astronomical?: undefined | string;
            lunar?: undefined | string;
            kilometers?: undefined | string;
            miles?: undefined | string;
          };
          orbiting_body?: undefined | string;
        }
      ];
  orbital_data?: {
    orbit_id?: undefined | string;
    orbit_determination_date?: undefined | string;
    first_observation_date?: undefined | string;
    last_observation_date?: undefined | string;
    data_arc_in_days?: undefined | number;
    observations_used?: undefined | number;
    orbit_uncertainty?: undefined | string;
    minimum_orbit_intersection?: undefined | string;
    jupiter_tisserand_invariant?: undefined | string;
    epoch_osculation?: undefined | string;
    eccentricity?: undefined | string;
    semi_major_axis?: undefined | string;
    inclination?: undefined | string;
    ascending_node_longitude?: undefined | string;
    orbital_period?: undefined | string;
    perihelion_distance?: undefined | string;
    perihelion_argument?: undefined | string;
    aphelion_distance?: undefined | string;
    perihelion_time?: undefined | string;
    mean_anomaly?: undefined | string;
    mean_motion?: undefined | string;
    equinox?: undefined | string;
    orbit_class?: {
      orbit_class_type?: undefined | string;
      orbit_class_description?: undefined | string;
      orbit_class_range?: undefined | string;
    };
  };
  is_sentry_object?: undefined | false;
}
export interface SingleMeteor {
  name: string | undefined;
  hazardous: boolean | undefined;
  diameter: string | undefined;
  distance: string | undefined;
  approachSpeed: string | undefined;
  approachDate: string | undefined;
  id: string | undefined;
}
export interface QuerySearchContextPropsType {
  pageIndex: number | undefined;
  setPageIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  startDate: string | undefined;
  setStartDate: React.Dispatch<React.SetStateAction<string | undefined>>;
  endDate: string | undefined;
  setEndDate: React.Dispatch<React.SetStateAction<string | undefined>>;
  isQuerySelected: boolean;
  setIsQuerySelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SingleRowPageProps {
  singleMeteor: SingleMeteorData;
}

export type PagesArray = string[];

export interface PageIndexProps {
  data: SingleMeteorData[];
}
