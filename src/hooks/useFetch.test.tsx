import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { AxiosResponse } from "axios";

import useFetch from "./useFetch"; 

jest.mock("axios");

describe("useFetch", () => {
  it("fetches data successfully", async () => {
    const responseData = { key: "value" };
    const mockResponse: AxiosResponse<typeof responseData> = {
      data: responseData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    axios.create.mockReturnValue({
      get: jest.fn().mockResolvedValue(mockResponse),
    });

    const TestComponent = () => {
      const { fetchData } = useFetch<typeof responseData>();
      const [data, setData] = React.useState<typeof responseData | null>(null);

      React.useEffect(() => {
        const fetchDataAsync = async () => {
          const result = await fetchData("test-url");
          setData(result);
        };
        fetchDataAsync();
      }, []);

      return (
        <div>
          {data ? (
            <span data-testid="data-display">{JSON.stringify(data)}</span>
          ) : (
            <span data-testid="loading">Loading...</span>
          )}
        </div>
      );
    };

    render(<TestComponent />);

    await waitFor(() => {
      const dataDisplay = screen.getByTestId("data-display");
      expect(dataDisplay).toBeInTheDocument();
      expect(dataDisplay.textContent).toBe(JSON.stringify(responseData));
    });
  });
});
