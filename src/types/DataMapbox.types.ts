export interface MapboxItem {
  properties: {
    name: string;
    full_address: string;
    metadata: {
      phone: string;
    };
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
}

export interface UpdateMapboxItem extends MapboxItem {
  id: number;
  currencies: string[];
}

export interface TypeDataMapbox {
  data: {
    features: MapboxItem[];
  };
}

export interface StateBankMap {
  view: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  filter: string;
  bankID: number | null;
  data: UpdateMapboxItem[] | undefined;
}

export interface PropsMarker {
  item: UpdateMapboxItem;
  bankID: number | null;
  handleClickOpen: (id: number) => void;
  handleClickClose: () => void;
}

export interface PropsBankSearch {
  value: string;
  theme: string;
  handleChangeFilter: (value: string) => void;
}
